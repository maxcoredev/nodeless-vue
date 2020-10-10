const template = `

<h1>Текущие курсы валют</h1>

<table>
    <tr v-for="(item, key) in items">
        <th>{{ key }}</th>
        <td>
            <table v-if="key == 'Valute'">
                <tr v-for="(i, k) in item">
                    <th>{{ k }}</th>
                    <td>{{ i }}</td>
                </tr>
            </table>
            <div v-else>
                {{ item }}
            </div>
        </td>
    </tr>
</table>

<component is="style">
.title {
    color: #999;
}
</component>

`

export default {
    data: () => ({
        items: null
    }),
    async created() {
        this.items = await fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(r=>r.json())
    },
    template,
}