import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default{
    components:{ Assignment, AssignmentTags, Panel },
    template: `
        <Panel v-show="assignments.length"  class="w-60">
            <div class="flex justify-between item-start">
                <h2 class="font-bold mb-2">{{ title }} 
                    <span>({{ assignments.length }})</span>
                </h2>

                <button v-show="canToggle" @click="$emit('toggle')"> x </button>
            </div>
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                v-model:currentTag = "currentTag"
            />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <assignment
                    v-for="assignment in filteredAssignment"
                    :key="assignment.id"
                    :assignment="assignment" 
                />
            </ul>
            <slot></slot>

            <template #footer> my footer goes here. </template>
        </panel>
    `,
    props:{
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
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