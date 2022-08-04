
class File {
    constructor(name, file) {
        this.id = Date.now();
        this.name = name;
        this.file = file;
    }
}

class Files {
    constructor() {
        this.files = [];
    }
    addFile(name,file) {
        let result;
        this.files.push(result = new File(name,file));
        return result;
    }
    removeFile(id) {
        let index = this.files.findIndex(function (f) { return f.id == id; });
        if (index >= 0) this.files.splice(index, 1);
        else throw new Error('File not found');
    }
    /*modificarLibro(id, titulo, autores) {
        let libro = this.libros.find(function (l) { return l.id == id; });
        if (libro) {
            libro.titulo = titulo;
            libro.autores = autores;
            return libro;
        } else {
            throw new Error(`Libro no encontrado ${id}`)
        }
    }*/
    viewFile(id) {
        let file = this.files.find(function (f) { return f.id == id; });
        if (file) return file;
        else throw new Error(`File not found with id: ${id}`)
    }
    
} module.exports = new Files();



