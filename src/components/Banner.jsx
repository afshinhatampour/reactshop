function Banner(props) {
    return (
        <>
            <div className="col-md-6 p-2">
                <a href="#" style={{textDecoration: "none", color: "#222222"}}>
                    <div className="col-md-12 p-3 shadow"
                         style={{
                             height: "200px",
                             borderRadius: "10px",
                             backgroundImage: `url("https://fakeimg.pl/600x300/${props.bgColor}/ffffff")`,
                             backgroundSize: "cover",
                             backgroundPosition: "center"
                    }}>
                        <h5 className="display-6 text-white">Lorem ipsum dolor sit amet.</h5>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Banner;
