import AssignmentList from "./AssignmentList.js";

export default{
    components: { AssignmentList },
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
            <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list> 
        </section>
    `,
    data() {
        return {
            assignments: [
                { id:1, name:'Finish Project', complete: false},
                { id:2, name:'Read chapter 10', complete: false},
                { id:3, name:'Turn in homework', complete: false}
            ] 
        }
    },
    computed:{
        inProgressAssignments(){
            return this.assignments.filter(assignment => ! assignment.complete);
        },

        completedAssignments(){
            return this.assignments.filter(assignment => assignment.complete);
        }
    }
}