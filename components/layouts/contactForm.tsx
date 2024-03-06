"use client"

import { useContact } from "@/hooks/useContact";
import Title from "../ui/title";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { titleContact } from "@/schema/schema";
import { TransitionDown, TransitionRight } from "../ui/transitions";


const ContactForm = () => {
    const { handleForm, handleSubmit, register, errors } = useContact();
    
    return(
        <form onSubmit={handleSubmit(handleForm)} className="w-[500px] flex flex-col gap-3 relative">
            <div className="flex flex-col">
                <TransitionDown className="flex pb-5 sm:p-5 lg:pl-0">
                    <Title title={titleContact.title} />
                </TransitionDown>
            </div>
            <TransitionRight delay={0.4} className="flex flex-col gap-3 pl-0 sm:pl-16 lg:pl-0">
                <input type="text" {...register('name')} placeholder="Nome" className="p-3 md:p-5 bg-slate-400 placeholder:text-slate-500 dark:bg-secondary dark:placeholder:text-white text-white border-none rounded-md" />
                {errors.name?.message && (
                    <p className='text-sm text-red-500 font-medium'>{errors.name.message}</p>
                )}
                <input type="text" {...register('phone')} maxLength={11} placeholder="Telefone" className="p-3 md:p-5 bg-slate-400 placeholder:text-slate-500 dark:bg-secondary dark:placeholder:text-white text-white border-none rounded-md" />
                {errors.phone?.message && (
                    <p className='text-sm text-red-500 font-medium'>{errors.phone.message}</p>
                )}
                <input type="email" {...register('email')} placeholder="E-mail" className="p-3 md:p-5 bg-slate-400 placeholder:text-slate-500 dark:bg-secondary dark:placeholder:text-white text-white border-none rounded-md" />
                {errors.email?.message && (
                    <p className='text-sm text-red-500 font-medium'>{errors.email.message}</p>
                )}
                <input type="text" {...register('ass')} placeholder="Assunto" className="p-3 md:p-5 bg-slate-400 placeholder:text-slate-500 dark:bg-secondary dark:placeholder:text-white text-white border-none rounded-md" />
                {errors.ass?.message && (
                    <p className='text-sm text-red-500 font-medium'>{errors.ass.message}</p>
                )}
                <textarea placeholder="Mensagem" {...register('message')} rows={5} className="p-3 md:p-5 bg-slate-400 placeholder:text-slate-500 dark:bg-secondary dark:placeholder:text-white text-white border-none rounded-md" />
                {errors.message?.message && (
                    <p className='text-sm text-red-500 font-medium'>{errors.message.message}</p>
                )}
                <div className='flex flex-col md:flex-row w-full items-center gap-x-4'>
                    <label>Como prefere ser respondido?</label>
                    <select {...register('return')} className="flex flex-1 p-2 bg-slate-400 dark:bg-secondary text-slate-500 dark:text-white border-none rounded-md">
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="E-mail">E-mail</option>
                        <option value="Telefone">Telefone</option>
                    </select>
                </div>
                <button type="submit" className="bg-accent text-white border-none font-bold cursor-pointer rounded-md p-5">Enviar</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </TransitionRight>
        </form>
    )
}

export default ContactForm;