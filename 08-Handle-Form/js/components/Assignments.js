import AssignmentList from "./AssignmentList.js";

export default{
    components: { AssignmentList },
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
            <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list> 
        
            <form @submit.prevent = "add">
                <div class="border text-black">
                    <input v-model="newAssignment" class="p-2" placeholder="New assignment...">
                    <button class="bg-white p-2 border-l" type="submit">Add</button>
                </div>
            </form>
        </section>
    `,
    data() {
        return {
            assignments: [
                { id:1, name:'Finish Project', complete: false},
                { id:2, name:'Read chapter 10', complete: false},
                { id:3, name:'Turn in homework', complete: false}
            ],
            newAssignment: '' 
        }
    },
    computed:{
        inProgressAssignments(){
            return this.assignments.filter(assignment => ! assignment.complete);
        },

        completedAssignments(){
            return this.assignments.filter(assignment => assignment.complete);
        }
    },

    methods:{
        add(){
            this.assignments.push({
                id: this.assignments.length + 1,
                name: this.newAssignment,
                complete: false,
            }),
            this.newAssignment = ''
        }
    }
}