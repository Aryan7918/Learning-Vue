import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default{
    components:{ Assignment, AssignmentTags },
    template: `
        <section v-show="assignments.length"  class="mb-8">
            <h2 class="font-bold mb-2">{{ title }} ({{ assignments.length }})</h2>
            
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                :current-tag = "currentTag"
                @change="currentTag = $event"
                />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <assignment
                    v-for="assignment in filteredAssignment"
                    :key="assignment.id"
                    :assignment="assignment" 
                />
            </ul>
        </section>
    `,
    props:{
        assignments: Array,
        title: String
    },
    data(){
        return {
            currentTag: 'all'
        };
    },
    computed:{
        filteredAssignment(){
            if(this.currentTag == 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag == this.currentTag);
        },
       
    }

}