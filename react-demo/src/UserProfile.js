const UserProfile = ({name, age, gender, indexNumber, ...props}) => {


    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <img src={`https://randomuser.me/api/portraits/${gender}/${indexNumber}.jpg`} alt=""/>
            {props.children}
        </div>
    )
}

export default UserProfile;