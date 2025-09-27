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
            assignments: [], 
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
    
    created(){
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            });    
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