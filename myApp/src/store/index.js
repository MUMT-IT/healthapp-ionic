import { createStore } from 'vuex';

const store = createStore({
    state(){
        return{
            exerlst:[
                {
                  id:"m1",
                  image:"https://source.unsplash.com/z4WH11FMfIQ/400x300",
                  title:"RUN",
                  description:"Long Run",
                },
                 {
                  id:"m2",
                  image:"https://source.unsplash.com/ljoCgjs63SM/400x300",
                  title:"Walk",
                  description:"Step by Step",
                },
                 {
                  id:"m3",
                  image:"https://source.unsplash.com/ZmZEkO-pb7M/400x300",
                  title:"Swim",
                  description:"In the poor",
                },
                {
                  id:"m4",
                  image:"https://source.unsplash.com/o2FCfhNSjPo/400x300",
                  title:"Bike",
                  description:"Speed Road",
                },
                {
                  id:"m5",
                  image:"https://source.unsplash.com/nqUHQkuVj3c/400x300",
                  title:"yoga",
                  description: "yoga",
                },
                {
                  id: "m6",
                  image: "https://source.unsplash.com/GRDpPpKczdY",
                  title: "dance",
                  description: "dance",
                }
              ],
        };
    },
    getters: {
      exerlst(state){
            return state.exerlst;
        },
      exeritem(state){
        return (exeritemId) => {
          return state.exerlst.find((exeritem) => exeritem.id === exeritemId);
        }
      },  
    },
});

export default store;