<template>
  <div class="container is-flex is-justify-content-center">
    <div class="box" v-if="!toBuy">
      <h2 class="title is-2">Nothing to buy today !</h2>
    </div>
    <div class="card" v-else>
      <div class="card-header">
        <h3 class="title is-3 mt-5 mb-5 ml-auto mr-auto">Shopping list</h3>
      </div>
      <div class="card-content">
        <span v-for="pastries in pastry" :key="pastries" class="is-size-5">
          {{ pastries.name }} x {{ shopping[pastries.id] }}
        </span>

      </div>
      <div class="card-footer">
        <h4 class="title is-4 mt-5 mb-5 ml-auto mr-auto">Price : {{ this.price }} €</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingComponent",
  data() {
    return {
      toBuy: false,
      pastry: [],
      shopping: {},
      price: 0
    }
  },
  props: {
    studentId: String,
    promotionId: String
  },
  methods: {},
  mounted() {
    fetch("/api/croissanted/" + this.studentId + "/student",
        {
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
        .catch(err => {
          console.error(err)
        })
        .then(resp => resp.json())
        .then(json => {
          for (const croissanted of json) {
            if (croissanted.bought === false) {
              this.toBuy = true;
              break;
            }
          }
        })
        .then(() => {
          if (this.toBuy) {
            fetch("/api/promotion/" + this.promotionId + "/student",
                {
                  mode: 'cors',
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                })
                .catch(err => {
                  console.error(err)
                })
                .then(resp => resp.json())
                .then(json => {
                  let fetches = []
                  let shopping = {}
                  json = json[0]['student']
                  for (const student of json) {
                    if (!fetches.includes(student.pastryId)) fetches.push(student.pastryId)
                    // eslint-disable-next-line no-prototype-builtins
                    if (shopping.hasOwnProperty(student.pastryId)) shopping[student.pastryId] += 1
                    else {
                      shopping[student.pastryId] = 1
                    }
                  }
                  this.shopping = shopping

                  fetches = fetches.map(x => "/api/pastry/" + x)

                  Promise.all(fetches.map(url => {
                    fetch(url, {
                      mode: 'cors',
                      headers: {
                        'Access-Control-Allow-Origin': '*',
                      },
                    })
                        .catch(err => {
                          console.error(err)
                        })
                        .then(resp => resp.json())
                        .then(json => {
                          this.pastry.push(json)
                        })
                        .then(() => {
                          for (const pastry of this.pastry) {
                            this.price += pastry.price * this.shopping[pastry.id]
                          }

                          this.pastry = this.pastry.filter((element, index) => {
                            return this.pastry.indexOf(element) === index;
                          });
                        })
                  }))
                })


          }
        })
  },

}
</script>

<style scoped>

.card {
  width: 30%;
}

</style>
