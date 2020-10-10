export default {
    methods: {
        hi() {
            alert('Hi!')
        }
    },
    template: `
    
    <button @click="hi()">
        <slot></slot>
    </button>
    
`}