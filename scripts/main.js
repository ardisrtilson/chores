import { getChores } from "./ChoreProvider.js"
import { getFamilyMembers } from "./FamilyProvider.js"
import { getFamilyChores } from "./FamilyChoreProvider.js"
import { FamilyList } from "./FamilyList.js"

getChores()
    .then(getFamilyMembers)
    .then(getFamilyChores)
    .then(FamilyList)