<template>
    <v-container>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                        n
                    </th>
                    <th class="text-left">
                        a
                    </th>
                    <th class="text-left">
                        b
                    </th>
                    <th class="text-left">
                        c
                    </th>
                    <th class="text-left">
                        f(a)
                    </th>
                    <th class="text-left">
                        f(b)
                    </th>
                    <th class="text-left">
                        f(c)
                    </th>
                </tr>
            </thead>
            <button @click="seeData()">Btn</button>
            <tbody>
            <tr
                v-for="item in dataTable"
                :key="item.iteracion"
            >
                <td>{{ item.a }}</td>
                <td>{{ item.b }}</td>
                <td>{{ item.c }}</td>
                <td>{{ item.f_c }}</td>
            </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script>
export default{
    inject:['dataTable'],
    data(){
        return{
        }
    },
    methods:{
        seeData(){
            console.log(this.dataTable);
        }
    }
}
</script>
