import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { api } from '../../services/api';

import * as C from './style'
import {AiOutlineLeft, AiOutlineDownload} from 'react-icons/ai'
import {FiArrowDown} from 'react-icons/fi'

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
    const [image, setImage] = useState(null);

    const [ingredients, setIngredients] = useState([]); // vetores de valores
    const [newIngredient, setNewIngredient] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    const isMobile = useMediaQuery({ maxWidth: 1023})

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

    const formData = new FormData();

    formData.append("avatarFood", image); 
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    const ingredientsNames = ingredients.map(item => item.name);

    formData.append("ingredients", ingredientsNames);

    try {
        setLoading(true);

        await api.delete(`/food/${params.id}`, formData);

        alert("Item excluido com sucesso!");
        handleBack();

        setLoading(false);

    } catch (error){
        setLoading(false);
        error.response ? error.response.data.message : "Não foi possível excluir este item..." 
    }
}
    
    async function handleEditFood(){
    
    const formData = new FormData();

    if(!title || !category || !price || !description || !ingredients){
        //toast.warn("Prencha todos os dados do novo item!");
        alert("Prencha todos os dados do novo item!")
        return;
    }

    // Form data pega um conjunto de valores referidos e o append insere um valor caso exista ou não um valor

    formData.append("avatarFood", image); // primeiro valor da tabela do DB e o segundo do useState
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    const ingredientsNames = ingredients.map(item => item.name);

    formData.append("ingredients", ingredientsNames);

    try {
        setLoading(true);

        await api.put(`/food/${params.id}`, formData);

        alert("Item editado com sucesso!");
        handleBack();

        setLoading(false);

    } catch (error){
        setLoading(false);
        error.response ? error.response.data.message : "Não foi possível editar este item..." 
    }
}



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
    
                        <Section title="Imagem do prato">
                                <InputFile
                                type="file"
                                icon={AiOutlineDownload}
                                label="Selecione imagem"
                                onChange={e => setImage(e.target.files[0])}
                                />
                            </Section>
    
                            <Section title="Nome">
                                <Input
                                placeholder="Salada"
                                type="text"
                                onChange={e => setTitle(e.target.value)}
                                />
                            </Section>
                            
                            <Section title="Categoria">
                                <Select
                                option="Selecionar"
                                icon={FiArrowDown}
                                onChange={e => setCategory(e.target.value)}
                                />
                            </Section>
    
    
                        </C.InputWrapper>
                        
                        <C.InputWrapper>
    
                        <Section title="Ingredientes">
    
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
    
                            <Section title="Preço">
                                <Input
                                placeholder="R$ 10.00"
                                type="text"
                                onChange={e => setPrice(e.target.value)}
                                />
                            </Section>
                            
                        </C.InputWrapper>
                            
                        <C.InputWrapper>
    
                            <Section title="Descrição">
                                <TextArea
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