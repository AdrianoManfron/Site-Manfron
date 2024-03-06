import { schema } from "@/schema/schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from "react";
import {  useForm } from "react-hook-form";
import { FormProps } from "@/types/types";
import emailjs from '@emailjs/browser';
import { phoneMask } from "@/functions/mask";
import { toast } from 'react-toastify';

export const useContact = () => {
    const [loading, setLoading] = useState(false);
    
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors } } = useForm<FormProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
        defaultValues:{
            name: '',
            phone: '',
            email: '',
            ass: '',
            message: '',
            return: 'WhatsApp'
        }
    })

    const phone = getValues('phone')

    const handleForm = async (data: FormProps) => {
        setLoading(true);

        const templateParams = {
        ...data,
        };

        emailjs.send('service_orqyhep', 'template_kqj72s2', templateParams, 'rEy5-HumiM4M2Mjsv')
            .then((res) => {
                console.log(res.text)
                if(res.text){
                    toast.success('Mensagem enviada com sucesso! Em breve lhe retornarei.');
                    reset();
                    setLoading(false);
                }
            }, (err) => {
            console.log('Erro! ', err)
        })
    }

    useEffect(() => {
        setValue('phone', phoneMask(phone))

        if(phone.length != 11) return
    }, [setValue, phone])
    
    return{
        errors,
        register,
        handleSubmit,
        handleForm
    }
}