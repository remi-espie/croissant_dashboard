<template>
  <div class="container is-flex is-justify-content-center">
    <div class="box" v-if="!toBuy">
      <h2 class="title is-2 m-5">Nothing to buy today !</h2>
    </div>
    <div class="card" v-else>
      <div class="card-content">
        <h3 class="title is-3 mt-5 mb-5 ml-auto mr-auto">Shopping list</h3>
      </div>
      <div class="card-content">
        <div v-for="pastries in pastry" :key="pastries" class="is-size-5">
          {{ pastries.name }} x {{ shopping[pastries.id] }}
        </div>

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
            'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
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
                        'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
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


                      Promise.all(fetches.map(url => fetch(url,
                          {
                            mode: 'cors',
                            headers: {
                              'Access-Control-Allow-Origin': 'https://cluster-2022-2.dopolytech.fr/',
                            },
                          })))
                          .catch(err => {
                            console.error(err)
                          })
                          .then(responses => Promise.all(responses.map(res => res.json())))
                          .then(json => {
                            for (const pastry of json) {
                              this.pastry.push(pastry)
                              this.price += pastry.price * this.shopping[pastry.id]
                            }

                            this.price = Math.round(this.price * 100) / 100
                            this.pastry = this.pastry.filter((element, index) => {
                              return this.pastry.indexOf(element) === index;
                            });

                          })
                    })
              }
            }
        )
  },

}
</script>

<style scoped>


</style>
