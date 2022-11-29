-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32),
    "firstname" VARCHAR(32) NOT NULL,
    "mail" TEXT,
    "birthday" TIMESTAMP(3) NOT NULL,
    "promotionId" TEXT,
    "pastryId" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promotion" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32),
    "year" INTEGER,
    "url_schedule" TEXT,
    "url_picture" TEXT,

    CONSTRAINT "promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pastry" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32),
    "price" DOUBLE PRECISION,

    CONSTRAINT "pastry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "croissanted" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "bought" BOOLEAN NOT NULL DEFAULT false,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "croissanted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login" (
    "id" TEXT NOT NULL,
    "login" TEXT,
    "password" TEXT,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote" (
    "id" TEXT NOT NULL,
    "quote" TEXT,
    "author" VARCHAR(32) DEFAULT 'anon',

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_mail_key" ON "student"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "quote_quote_key" ON "quote"("quote");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "promotion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_pastryId_fkey" FOREIGN KEY ("pastryId") REFERENCES "pastry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "croissanted" ADD CONSTRAINT "croissanted_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login" ADD CONSTRAINT "login_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
