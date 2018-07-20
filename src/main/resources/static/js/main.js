
Vue.component('messages-list', {
    props:['messages'],
   template: '<div>' +
   '<div v-for="message in messages">{{message.text}}</div>' +
   '</div>'
});

var app = new Vue({
    el: '#app',
    template: '<messages-list :messages="messages"></messages-list>',
    data: {
        messages:
            [
            {id: '123', text: "wow"},
            {id: '12', text: "more"},
            {id: '1', text: "another"}
            ]
    }
});