

const Featch = () => {
   
    const [user,setUser] =useState();
   

    useEffect( () => {

        fetch('https://all-in-one-server-site.vercel.app/')
        .then(res =>res.json())
        .then(data => setUser(data))

    }

        ,[])


        console.log(data);






    return (
        <div>


            
        </div>
    );
};

export default Featch;