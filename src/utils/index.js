export function getImgSrc(name) {
    const path = `/src/assets/img/${name}`
    const modules = import.meta.globEager('/src/assets/img/*')
    return modules[path].default
}