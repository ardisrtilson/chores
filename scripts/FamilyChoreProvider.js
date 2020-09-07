let familyChores = []

export const useFamilyChores = () => familyChores.slice()

export const getFamilyChores = () => fetch("http://localhost:8088/familyChores")
    .then(res => res.json())
    .then(data => familyChores = data)