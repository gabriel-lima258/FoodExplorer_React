import { useNavigate } from 'react-router-dom';

import * as C from './style'
import {AiOutlineLeft, AiOutlineDownload} from 'react-icons/ai'
import {FiArrowDown} from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { InputFile } from '../../components/InputFile';
import { Footer } from '../../components/Footer';
import { Select } from '../../components/Select';
import { Section } from '../../components/Section';
import { Tags } from '../../components/Tags';
import { TextArea } from '../../components/TextArea';

export function NewFood(){

    const navigate = useNavigate();

    function handleBack(){
        navigate("/menu")
    }

    return(
        <C.Container>
            <Header/>
            <C.Content>
                <C.Form>
                    
                <ButtonText title="voltar" icon={AiOutlineLeft} onClick={handleBack}/>

                    <h1>Novo Prato</h1>

                        <Section title="Imagem do prato">
                            <InputFile
                            type="file"
                            icon={AiOutlineDownload}
                            label="Selecione imagem"
                            />
                        </Section>

                        <Section title="Nome">
                            <Input
                            placeholder="Salada"
                            type="text"
                            />
                        </Section>
                        
                        <Section title="Categoria">
                            <Select
                            option="Selecionar"
                            icon={FiArrowDown}
                            />
                        </Section>

                        <Section title="Ingredientes">
                            <div className="tags">
                            <Tags
                            value="Pão"
                            placeholder="Adicionar"
                            />
                            <Tags
                            isnew
                            placeholder="Adicionar"
                            />
                            </div>
                        </Section>

                        <Section title="Preço">
                            <Input
                            placeholder="R$ 10.00"
                            type="text"
                            />
                        </Section>

                        <Section title="Descrição">
                            <TextArea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            />
                        </Section>
                        
                        <Button 
                        type="button" 
                        add
                        title="Salvar alterações"
                        />
                       
                </C.Form>

            </C.Content>
            <Footer/>
            
        </C.Container>
    );
}