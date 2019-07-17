import React, {Component } from "react";
import API from "../Utils/API";
import SavedBookList from "../Components/SavedBookList";
import MessageBox from "../Components/MessageBox";

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: [],
            notif: {
                isActive: false,
                message: ""
            }
        };
    }

    componentDidMount() {
        API.getBooks()
        .then(response => {
            this.setState({
                savedBooks: response.data
            });
        })
        .catch(err => {
            this.setState({
                notif: {
                    isActive: true,
                    type: "danger",
                    message: "Please Try Again!"
                }
            });
        });
    }

    deleteBook(Id, Index) {
        this.setState(state => {
            const savedBooks = state.savedBooks.filter((item, j) => Index !== j);

            return {
                savedBooks
            };
        });

        API.deleteBook(Id)
            .then(response => {
                this.setState({
                    notif: {
                        isActive: true,
                        type: "success",
                        message: "Deleted!"
                    }
                });
            })
            .catch(err => {
                this.setState({
                    notif: {
                        isActive: true,
                        type: "danger",
                        message: "Please Try Again"
                    }
                });
            });
        }
    

    render() {
        const { savedBooks, notif } = this.state;
        return (
            <div className="saved">
                <messageBox notif={notif} />
                {savedBooks.length > 0 ? (
                    <SavedBookList
                        books={savedBooks}
                        deleteBook={(id, index) => this.deleteBook(id, index)}
                    />
                ) : (
                    <p className="no-data">There Are No Saved Books!</p>
                )}
            </div>
        );
    }
}

export default Saved;