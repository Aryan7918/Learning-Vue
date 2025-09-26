import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default{
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
            <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list> 
        
            <assignment-create @add="add"></assignment-create>
        </section>
    `,
    data() {
        return {
            assignments: [
                { id:1, name:'Finish Project', complete: false, tag:'science'},
                { id:2, name:'Read chapter 10', complete: false, tag:'maths'},
                { id:3, name:'Turn in homework', complete: false, tag:'physics'}
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
        add(name){
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
            })
        }
    }
}