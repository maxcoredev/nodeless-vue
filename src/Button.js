const template = `

<button @click="hi()"><slot></slot></button>

`

export default {
    template,
    methods: {
        hi() {
            alert('Hi!')
        }
    }
}