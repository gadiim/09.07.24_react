function PersonalPage(props) {
    return (
        <>
            <h3>{props.name} {props.surname}</h3>
            <img src={props.photo} className="photo" alt="photo" />
            <div><b>phone: </b>{props.phone}</div>
            <div><b>email: </b>{props.email}</div>
            <div><b>residence: </b>{props.residence}</div>
            <div><b>experience: </b>{props.experience}</div>
            <div><b>skills: </b>{props.skills}</div>
        </>
    );
}

export default PersonalPage;