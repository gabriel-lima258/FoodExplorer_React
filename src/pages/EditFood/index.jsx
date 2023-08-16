import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import * as C from './style'
import {AiOutlineLeft, AiOutlineDownload} from 'react-icons/ai'
import {FiArrowDown} from 'react-icons/fi'
import {MdOutlineFastfood, MdFormatAlignLeft, MdOutlineAddShoppingCart} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {BsChatLeftText} from 'react-icons/bs'


import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { InputFile } from '../../components/InputFile';
import { Footer } from '../../components/Footer';
import { Select } from '../../components/Select';
import { Section } from '../../components/Section';
import { Tags } from '../../components/Tags';
import { TextArea } from '../../components/TextArea';

export function EditFood(){
    const [title, setTitle] = useState(""); // valor inicial
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [ingredients, setIngredients] = useState([]); // vetores de valores
    const [newIngredient, setNewIngredient] = useState("");
  
    const [data, setData] = useState(null)

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    const isMobile = useMediaQuery({ maxWidth: 1023})

    const imageURL = data && `${api.defaults.baseURL}/files/${data.avatarFood}`;
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState();

    function handleChangeImage(event) {
        const file = event.target.files[0];
        setImage(file);

        const imagePreview = URL.createObjectURL(file);
        setImageFile(imagePreview);
    }

    function handleBack(){
        navigate("/");
    }

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient(""); // reseta o próximo valor
    }

    function handleRemoveIngredient(deleted){ //funcionalidade para remover tag, recebe como parâmetro o tag que deseja remover
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
        //filtrando na lista de tags atual (atual = prevState) a partir do tag que quero deletar, refazer a lista com todos os itens que são diferentes do tag que estou deletando
    }

    async function handleRemoveFood(){

        const isConfirm = window.confirm("Deseja excluir este item?")

        if (isConfirm){
        setLoading(true);

        await api.delete(`/foods/${params.id}`);
        handleBack();
        alert('Prato excluído com sucesso!');

        }
        setLoading(false);  
}
    
    async function handleEditFood(){

        const foodData = new FormData();

        setLoading(true)
    
        foodData.append("title", title);
        foodData.append("description", description);
        foodData.append("category", category);
        foodData.append("price", price);
    
        ingredients.map(ingredient => (
            foodData.append("ingredients", ingredient)
        ))
    
        const imageData = new FormData();

        imageData.append("avatarFood", image)

        // api para atualizar imagem

        if(image){
            await api
            .patch(`/foods/avatar/${params.id}`, imageData)
            .then(alert("Imagem atualizada com sucesso!"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao atualizar imagem!");
                }
        })
    }

        // api para atualizar dados
    
        await api
        .put(`/foods/${params.id}`, foodData)
        .then(alert("Prato editado com sucesso!"), handleBack())
        .catch((error) => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro ao criar o prato");
            }
        });
        
        setLoading(false);

}

    useEffect(() => {

        async function fetchFood(){
            const response = await api.get(`/foods/${params.id}`);
            setData(response.data);

            const { category, title, price, description, ingredients } = response.data;
            setTitle(title);
            setCategory(category);
            setDescription(description);
            setPrice(price);
            setIngredients(ingredients.map(ingredient => ingredient.name));
        }

        fetchFood();
    }, [])



    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

            <C.Content>
            <C.Form>
                    
                    <ButtonText 
                    title="Voltar" 
                    icon={AiOutlineLeft} 
                    onClick={handleBack}
                    className="btn-back"
                    />
    
                        <h1>Editar prato</h1>
    
                        <C.InputWrapper>
    
                        <Section title="Imagem do prato" className="image-div">

                                <img src={imageFile ? imageFile : imageURL} alt="" />

                                <InputFile
                                type="file"
                                icon={AiOutlineDownload}
                                label="Selecione imagem"
                                onChange={e => setImage(e.target.files[0])}
                                onClick={handleChangeImage}
                                />
                               
                        </Section>
    
                            <Section title="Nome" icon={MdOutlineFastfood}>
                                <Input
                                placeholder="Salada"
                                value={title}
                                type="text"
                                onChange={e => setTitle(e.target.value)}
                                />
                            </Section>
                            
                            <Section title="Categoria" icon={MdFormatAlignLeft}>
                                <Select
                                value={category}
                                icon={FiArrowDown}
                                onChange={e => setCategory(e.target.value)}
                                />
                            </Section>
    
    
                        </C.InputWrapper>
                        
                        <C.InputWrapper>
    
                        <Section title="Ingredientes" icon={MdOutlineAddShoppingCart}>
    
                            <div className="tags">
                                {
                                    // percorre o vetor ingredientes, index consede um id para cada
                                    ingredients.map((ingredient, index) => (
                                        <Tags
                                        key={String(index)}
                                        value={ingredient} // recebe um valor já adicionado
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }

                                <Tags
                                isnew
                                placeholder="Adicionar"
                                value={newIngredient} // recebe novo valor
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={handleAddIngredient}
                                />
                            </div>
                              
                            </Section>
    
                            <Section title="Preço" icon={GiReceiveMoney}>
                                <Input
                                placeholder="R$ 10.00"
                                value={price}
                                type="text"
                                onChange={e => setPrice(e.target.value)}
                                />
                            </Section>
                            
                        </C.InputWrapper>
                            
                        <C.InputWrapper>
    
                            <Section title="Descrição" icon={BsChatLeftText}>
                                <TextArea
                                defaultValue={description}
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                onChange={e => setDescription(e.target.value)}
                                />
                            </Section>
                            
                        </C.InputWrapper>
                        
                        <div className="btn-edit">
                            <Button
                                type="button"
                                title="Excluir prato"
                                exclude
                                onClick={handleRemoveFood}
                            >
                                {loading ? "Excluindo prato" : "Excluir prato"}
                            </Button>
                            <Button
                                type="button"
                                title="Salvar alterações"
                                add
                                onClick={handleEditFood}
                            >
                                {loading ? "Atualizando prato" : "Salvar alterações"}
                            </Button>
                        </div>
                            
                    </C.Form>
                        
            </C.Content>
            <Footer/>
            
        </C.Container>
    );
}