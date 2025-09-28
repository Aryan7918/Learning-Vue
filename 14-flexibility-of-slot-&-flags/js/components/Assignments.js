import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default{
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="inProgressAssignments" title="In Progress">
                <assignment-create @add="add" class="mt-4"></assignment-create>
            </assignment-list>
             
            <div v-show="showCompleted">
                <assignment-list 
                    :assignments="completedAssignments" 
                    title="Completed" 
                    canToggle
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list> 
            </div>
            
        </section>
    `,
    data() {
        return {
            assignments: [], 
            showCompleted: true
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