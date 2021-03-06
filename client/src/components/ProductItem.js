import React, { Component } from 'react';


class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete() {
        const { onDelete, name } = this.props;
        onDelete(name);
    }

    onEdit() {
        this.setState({ isEdit: true });
    }

    onEditSubmit(event) {
        event.preventDefault();
        this.props.onEditSubmit(this.name.value, this.bust.value, this.props.name);

        this.setState({ isEdit: false });
    }
    render() {
        const { name, bust} = this.props;

        return (
            <div>
                {
                    this.state.isEdit ? (
                        <form onSubmit={ this.onEditSubmit }>
                            <input placeholder="Name" ref={ name => this.name = name } defaultValue={ name } />
                            <input placeholder="Price" ref={ bust => this.bust = bust } defaultValue={ bust } />
                            <button>Save</button>
                        </form>
                    ) : (
                            <div>
                                <span>{ name }</span>
                                { ` | ` }
                                <span> { bust }</span>
                                { ` | ` }
                                <button onClick={ this.onEdit }>Edit</button>
                                <button onClick={ this.onDelete }>Delete</button>
                            </div>

                        )
                }

            </div>
        );

    }
}

export default ProductItem;
