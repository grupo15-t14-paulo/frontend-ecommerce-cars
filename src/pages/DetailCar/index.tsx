import moment from "moment"
import 'moment/dist/locale/pt-br'
import { FormEvent, useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/index";
import { ICarUserReturn, IComments } from "../../components/Card/interface";
import ImgDefault from "../../assets/Cars/default.png";
import { Link, useParams } from "react-router-dom";
import { profileName, profileTitleName } from "../../hooks/index";
import { Footer } from "../../components/footer";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAds } from "../../hooks/useAds";
import EditCommentModal from "../../components/EditComentModal";

export type Comment = {
  id: number;
  comment: string;
  createdAt:string
};

export const DetailCar = () => {
  const [car, setCar] = useState<ICarUserReturn>();
  const { carId } = useParams();
  const { user, loading , setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [editComment, setEditComment] = useState<IComments>({} as IComments);
  const {modalIsOpen , handleOpenModal} = useAds();  

  const addTextArea = (value: string) => {
    setText((prevText) => prevText + value + " ");
  };
    

  useEffect(() => {

    const getCar = async () => {
      try {
        const response = await api.get<ICarUserReturn>(`/cars/search/${carId}`);
        setCar(response.data);
      } catch (error) {
        console.log(error);
      }
      
    };
    getCar();
  }, [carId,loading]);

  
  const postComment = async (comment: string) => {
    try {
      setLoading(true)
      await api.post<Comment>(`/comments/${carId}`, { comment });
      setText("");
      toast.success("Comentario adicionado com sucesso")
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  const deleteComment = async (commentId: string) => {
    setLoading(true)
    try {
      await api.delete(`comments/${commentId}`);

      toast.success("Comentario deletado com sucesso");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    }finally{
      setLoading(false)
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text) {
      return;
    }

    postComment(text);
  };
  const isOwner = (userId:string) =>{
    if(user?.id === userId){
      return true
    }
    return false
  }
  return (
    <div className={"h-full min-w-screen box-border"}>
      <Navbar />
      <div className={"absolute h-[515px] w-full bg-colorBrandBrand1"}>
        <main
          className={
            "flex flex-col lg:flex-row gap-10 container max-w-[1200px] min-h-full box-border"
          }
        >
          <section className={"w-full lg:w-3/4 mt-10 flex gap-10 flex-col"}>
            <div
              className={
                "h-[350px] min-w-full flex justify-center items-center bg-colorColorsFixedWhiteFixed rounded"
              }
            >
              {car?.imageCover ? (
                <img src={car?.imageCover} alt={car?.brand} className={"w-72 lg:w-96 lg:max-w-96 h-max"} />
              ) : (
                <img src={ImgDefault} alt={car?.brand} className={"w-72 h-max"} />
              )}
            </div>
            <div>
              <div
                className={
                  "max-h-[326px] lg:h-[240px] min-w-full flex flex-col bg-colorColorsFixedWhiteFixed rounded p-8 gap-5 shadow-md"
                }
              >
                <h2 className={"text-ellipsis text-xl font-bold h-10"}>{car?.model}</h2>
                <div
                  className={
                    "flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center lg:mb-3 lg:mt-3"
                  }
                >
                  <div className={"flex gap-2"}>
                    <span className={"km-year w-max"}>{car?.year}</span>
                    <span className={"km-year w-max"}>{car?.mileage} Km</span>
                  </div>

                  <span>
                    {car?.price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </span>
                </div>
                {user ? (
                  <button
                    className={
                      "border w-max bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorBrandBrand1 px-4 py-2 text-sm rounded"
                    }
                  >
                    Comprar
                  </button>
                ) : (
                  <Link to={"/login"}
                    className={
                      "border w-max bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorBrandBrand1 px-4 py-2 text-sm rounded"
                    }
                  >
                    Fazer Login
                  </Link>
                )}
              </div>
              <div
                className={
                  "h-[300px] min-w-full overflow-auto flex flex-col bg-colorColorsFixedWhiteFixed rounded p-8 gap-5 mt-4 mb-4 shadow-md"
                }
              >
                <h2 className={"text-xl font-bold "}>Descrição</h2>
                <span>{car?.description}</span>
              </div>
              <div className="hidden lg:block lg:h-[900px]"></div>
            </div>
          </section>
          <section>
            <div
              className={
                "h-[350px] max-w-[382px] flex-col bg-colorColorsFixedWhiteFixed rounded mt-10 p-5 shadow-md"
              }
            >
              <h2 className={"mt-4 mb-10 text-xl"}>
                <b>Fotos</b>
              </h2>
              <div className={"grid grid-cols-3 gap-4 mt-5"}>
                {car?.images ? (
                  car?.images.map((img, id) => (
                    <div
                      className={
                        "bg-colorGreyScaleGrey7 h-[90px] w-[90px] flex items-center justify-center"
                      }
                      key={id}
                    >
                      <img src={img.urlImage} alt="" className={"w-[70px]"} />
                    </div>
                  ))
                ) : (
                  <div>Sem imagens</div>
                )}
              </div>
            </div>
            <div
              className={
                "max-h-[350px] max-w-[382px] flex flex-col gap-5 items-center bg-colorColorsFixedWhiteFixed rounded mt-10 p-5 shadow-md"
              }
            >
              <div className={"name-profile w-[77px] h-[77px] rounded-full text-3xl"}>
                {profileName(`${car?.user.name}`)}
              </div>
              <h2 className={"font-bold"}>{car?.user.name}</h2>
              <p>{car?.user.description}</p>
              <button
                className={
                  "border w-max bg-colorGreyScaleGrey0 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorGreyScaleGrey0 px-4 py-2 text-sm rounded "
                }
                onClick={() => navigate(`/users/${car?.user.id}`)}
              >
                Ver todos anuncios
              </button>
            </div>
          </section>
          <section className="shadow-md p-4 bg-colorColorsFixedWhiteFixed lg:h-full lg:absolute lg:w-[51%] lg:max-w-[815px] lg:top-[900px] mt-36">
            <h2 className={"text-colorGreyScaleGrey1 mb-5 text-2xl"}>Comentários</h2>
            <div>
              <ul>
                {car?.comments.map((comment) => (
                  <li key={comment.id} className="flex flex-col gap-2 mb-10">
                    <div className="flex gap-3 items-center">
                      <span className="name-profile">{profileName(`${comment.user.name}`)}</span>
                      <p>{profileTitleName(`${comment.user.name}`)}</p>
                      <p className="text-colorGreyScaleGrey4">{moment(comment.createdAt).locale("pt-br").fromNow()}</p>
                      {isOwner(comment.user.id) && 
                        <>
                          <button type="button" onClick={() => {
                            setEditComment(comment)
                            handleOpenModal()
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                          </button>
                          <button onClick={() => deleteComment(comment.id)} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </>
                      }
                    </div>
                    <p className="text-colorGreyScaleGrey2">{comment.comment}</p>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-baseline mt-36 relative">
                {user && <div className="flex gap-2 items-center">
                  <span className="name-profile">{profileName(`${user.name}`)}</span>
                  <p>{user.name}</p>
                </div>}
                <textarea className="outline-none h-32 w-full p-2 resize-none border rounded-sm border-colorGreyScaleGrey4 text-colorGreyScaleGrey2" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digitar comentário" 
                />
                {user ? <button type="submit" disabled={!text} className="bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed h-10 w-28 cursor-pointer border-none rounded-md lg:absolute lg:right-1 lg:bottom-12">Comentar</button> : 
                <button className="bg-colorGreyScaleGrey5 text-colorColorsFixedWhiteFixed h-10 w-28 border-none rounded-md lg:absolute lg:right-1 lg:bottom-12" disabled>Comentar</button>}
                <div className="flex flex-wrap gap-10 w-full">
                  <button type="button" onClick={()=> addTextArea("Gostei muito!")} className="text-colorGreyScaleGrey4 cursor-pointer">Gostei muito!</button>
                  <button type="button" onClick={()=> addTextArea("Incrível")} className="text-colorGreyScaleGrey4 cursor-pointer">Incrível</button>
                  <button type="button" onClick={()=> addTextArea("Recomendarei para meus amigos!")} className="text-colorGreyScaleGrey4 cursor-pointer">Recomendarei para meus amigos!</button>
                </div>
              </form>
            </div>
          </section>
          {modalIsOpen && <EditCommentModal commentInfo={editComment}/>}
        </main>
        <div className={"mb-32"}></div>
        <Footer />
      </div>
    </div>
  );
};
