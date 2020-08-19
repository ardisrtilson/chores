import { useChores } from "./styles/ChoreProvider.js"
import { useFamilyMembers } from "./FamilyProvider.js"
import { useFamilyChores } from "./FamilyChoreProvider.js"
import {FamilyMember} from "./FamilyMember.js"

const contentTarget = document.querySelector(".family")

export const FamilyList = () => {
    const chores = useChores()
    const people = useFamilyMembers()
    const peopleChores = useFamilyChores()

    const render = () => {
        contentTarget.innerHTML = people.map(person => {

            let relatedChores = peopleChores.filter(pc => pc.familyMemberId === person.id)

            relatedChores = relatedChores.map(rc => {
                return chores.find(chore => chore.id === rc.choreId)
            })

            const html = FamilyMember(person, relatedChores)

            return html
            
        }).join("")
    }

    render()
}