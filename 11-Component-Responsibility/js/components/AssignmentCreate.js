export default{
    template:`
        <form @submit.prevent = "add">
            <div class="border text-black">
                <input v-model="newAssignment" class="p-2" placeholder="New assignment...">
                <button class="bg-white p-2 border-l" type="submit">Add</button>
            </div>
        </form>
    `,
    data(){
        return {
            newAssignment: ''
        }
    },
    methods: {
        add(){
            this.$emit('add', this.newAssignment ),
            this.newAssignment = ''
        }
    },
}