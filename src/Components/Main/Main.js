import React, { Fragment } from 'react'
import md5 from 'js-md5'
import Modal from '../Modal/Modal'
import Marvel from '../../Images/marvel-logo.png'

const _private = 'd72fb2ccafd66f95c44d9d317a11a2d806295302';
const _public = 'a29ce800f0f546900270546d21f85bd7';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            isShow: false
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    showModal() {
        if (this.state.isShow === false)
            this.setState({ isShow: true });
    }

    closeModal() {
        if (this.state.isShow === true)
            this.setState({ isShow: false })
    }

    async componentDidMount() {
        const timestamp = Number(new Date());
        const hash = md5.create();
        hash.update(`${timestamp}${_private}${_public}`);
        await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&limit=20&apikey=${_public}&hash=${hash.hex()}`)
            .then(resp => resp.json())
            .then(res => this.setState({ info: res.data.results }))
        // const { data:{results:info}} = await(await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&limit=20&apikey=${_public}&hash=${hash.hex()}`)).json();
        // this.setState(info);
        // console.log(info)
    }

    render() {
        const { info } = this.state;
        return (
            <Fragment>
                <ul className="mv-hero-list">
                    {info.map((item) => {
                        return (
                            <li onClick={e => this.showModal(e)} className="mv-hero-list__name" key={item.id}>
                                <h3>{item.name}</h3>
                            </li>
                        )
                    })}
                    <Modal show={this.state.isShow} Image={Marvel} close={this.closeModal}/>
                    <span></span>
                </ul>

            </Fragment>

        )
    }
}

export default Main;