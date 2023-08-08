import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

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

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023})

    function handleBack(){
        navigate("/");
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
    
    
                        </C.InputWrapper>
                        
                        <C.InputWrapper>
    
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
                            
                        </C.InputWrapper>
                            
                        <C.InputWrapper>
    
                            <Section title="Descrição">
                                <TextArea
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                />
                            </Section>
                            
                        </C.InputWrapper>
                        
                        <div className="btn-edit">
                            <Button
                                type="button"
                                title="Encluir prato"
                                exclude
                            />
                            <Button
                                type="button"
                                title="Salvar alterações"
                                add
                            /> 
                        </div>
                            
                    </C.Form>
                        
            </C.Content>
            <Footer/>
            
        </C.Container>
    );
}