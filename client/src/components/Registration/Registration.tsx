import React, {FC, useEffect} from "react";
import {useForm} from "react-hook-form";
import {SignUpAttributes, SignUpData} from "../../types/types";
import './registration.scss';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {registrationUser} from "../../store/slices/userSlice";


export const Registration: FC = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state=>state.userReducer);
    const {register, handleSubmit,  formState} = useForm<SignUpAttributes>({
        mode: 'onChange',

    });
    const onSubmit = (data: SignUpAttributes) => {
        dispatch(registrationUser(data));
    };
    useEffect(() => {
        state.registrationIsSuccess && alert('Регистрация прошла успешно.\n\nВаш профиль будет активирован сразу после проверки администратором.');
    }, [state]);
    return (
        <section className="registration">
            <div className="registration__wrapper container">
                <h1 className="main-h1">
                    Регистрация
                </h1>

                <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <legend>Имя</legend>
                        <input className="main-input"
                               type="text"
                               {...register('first_name', {
                                   required: {
                                       value: true,
                                       message: 'Поле обязательно для заполнения',
                                   }
                               })}/>
                        {state.registrationError && state.registrationError.errors.first_name && <span className="registration__error">{state.registrationError.errors.first_name[0]}</span>}
                    </label>

                    <label>
                        <legend>Фамилия</legend>
                        <input className="main-input"
                               type="text"
                               {...register('last_name', {
                                   required: {
                                       value: true,
                                       message: 'Поле обязательно для заполнения',
                                   }
                               })}/>
                        {state.registrationError && state.registrationError.errors.last_name && <span className="registration__error">{state.registrationError.errors.last_name[0]}</span>}
                    </label>

                    <label>
                        <legend>Email</legend>
                        <input className="main-input"
                               type="email"
                               {...register('email', {
                                   required: {
                                       value: true,
                                       message: 'Поле обязательно для заполнения',
                                   }
                               })}/>
                        {state.registrationError && state.registrationError.errors.email && <span className="registration__error">{state.registrationError.errors.email[0]}</span>}
                    </label>

                    <label>
                        <legend>Пароль</legend>
                        <input className="main-input"
                               type="password"
                               {...register('password', {
                                   required: {
                                       value: true,
                                       message: 'Поле обязательно для заполнения',
                                   }
                               })}/>
                        {state.registrationError && state.registrationError.errors.password && <span className="registration__error">{state.registrationError.errors.password[0]}</span>}
                    </label>

                    <label>
                        <legend>Подтвердите пароль</legend>
                        <input className="main-input"
                               type="password"
                               {...register('password_confirmation', {
                                   required: {
                                       value: true,
                                       message: 'Поле обязательно для заполнения',
                                   }
                               })}/>

                    </label>
                    <label>
                        <legend>Компания</legend>
                        <input className="main-input"
                               type="text"
                               {...register('company', {
                                   required: {
                                       value: true,
                                       message: 'Поле обязательно для заполнения',
                                   }
                               })}/>
                        {state.registrationError && state.registrationError.errors.company && <span className="registration__error">{state.registrationError.errors.company[0]}</span>}
                    </label>
                    <label>
                        <legend>Город</legend>
                        <input className="main-input"
                               type="text"
                               {...register('city', {
                                   required: {
                                       value: true,
                                       message: 'Поле обязательно для заполнения',
                                   }
                               })}/>
                        {state.registrationError && state.registrationError.errors.city && <span className="registration__error">{state.registrationError.errors.city[0]}</span>}
                    </label>
                    <label>
                        <legend>Номер телефона</legend>
                        <input className="main-input"
                               type="text"
                               {...register('mobile', {
                                   required: {
                                       value: true,
                                       message: 'Поле обязательно для заполнения',
                                   },
                                   validate: {

                                   }
                               })}/>
                        {state.registrationError && state.registrationError.errors.mobile && <span className="registration__error">{state.registrationError.errors.mobile[0]}</span>}
                    </label>

                    <button className="main-button registration__button " type="submit" >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </section>
    );
};