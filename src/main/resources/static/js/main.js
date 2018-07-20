
Vue.component('message-row',{
    props: ['message'],
    template: '<div><i>({{message.id}})</i>{{message.text}}</div>'
})

Vue.component('messages-list', {
    props:['messages'],
   template: '<div>' +
   '<message-row v-for="message in messages" :key="message.id" :message="message"></message-row>' +
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