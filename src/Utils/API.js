import axios from "axios";

export default {
    getGoogleBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },
// Gets All The Books
    getBooks: function() {
        return axios.get("/api/books");
    },

// Gets Book Based on ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

// Saves Book To DB
    saveBook: function(saved) {
        return axios.post("/api/books", saved);
    },

// Deletes Book Given The ID
    deleteBook: function(id) {
        return axios.delete("/api/books" + id);
    }
}