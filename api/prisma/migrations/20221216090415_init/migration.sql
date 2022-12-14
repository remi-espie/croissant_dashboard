-- CreateTable
CREATE TABLE "student" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(32) NOT NULL,
    "firstname" VARCHAR(32) NOT NULL,
    "mail" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "promotionId" UUID,
    "pastryId" UUID,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promotion" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(32) NOT NULL,
    "year" INTEGER NOT NULL,
    "url_schedule" TEXT,
    "url_picture" TEXT,

    CONSTRAINT "promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pastry" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(32) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "pastry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "croissanted" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bought" BOOLEAN DEFAULT false,
    "studentId" UUID NOT NULL,

    CONSTRAINT "croissanted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "quote" TEXT NOT NULL,
    "author" VARCHAR(32) DEFAULT 'anon',

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_mail_key" ON "student"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "promotion_name_key" ON "promotion"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pastry_name_key" ON "pastry"("name");

-- CreateIndex
CREATE UNIQUE INDEX "login_login_key" ON "login"("login");

-- CreateIndex
CREATE UNIQUE INDEX "quote_quote_key" ON "quote"("quote");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "promotion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_pastryId_fkey" FOREIGN KEY ("pastryId") REFERENCES "pastry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "croissanted" ADD CONSTRAINT "croissanted_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login" ADD CONSTRAINT "login_login_fkey" FOREIGN KEY ("login") REFERENCES "student"("mail") ON DELETE CASCADE ON UPDATE CASCADE;


-- Create pgcrypto in case it don't exists
CREATE EXTENSION pgcrypto;

-- Procedure auto create login from student create
CREATE FUNCTION autocreateLogin()
    RETURNS TRIGGER AS $create$
    BEGIN
        INSERT INTO "login" ("login", "password") VALUES (NEW."mail", crypt(NEW."mail", gen_salt('bf', 11)));
        RETURN NEW;
    END;
$create$ LANGUAGE plpgsql;

-- Trigger auto create login from student create
CREATE TRIGGER "autocreateLogin" AFTER INSERT ON "student" FOR EACH ROW EXECUTE PROCEDURE autocreateLogin();

-- Procedure auto delete login from student delete
CREATE FUNCTION autodeleteLogin()
    RETURNS TRIGGER AS $delete$
    BEGIN
        DELETE FROM "login" WHERE "login" = OLD."mail";
        RETURN OLD;
    END;
$delete$ LANGUAGE plpgsql;

-- Trigger auto delete login from student delete
CREATE TRIGGER "autodeleteLogin" BEFORE DELETE ON "student" FOR EACH ROW EXECUTE PROCEDURE autodeleteLogin();
