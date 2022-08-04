
class FilesAppProxy { 
    async addFile(name, file) {
        let f = {name};
        return await fetch(`/api/files`, { method: 'POST', body: JSON.stringify(l), headers: { "Content-Type": "application/json" } });
    }
    async removeFile(id) {
        return await fetch(`/api/files/id/${id}`, { method: 'DELETE' });
    }
    
    async viewFile(id) {
        return await fetch(`/api/files/id/${id}`);
    }

    async files() {
        return await fetch('/api/files'); //fetch hace un get y await nos devuelve una promesa
    }
}
