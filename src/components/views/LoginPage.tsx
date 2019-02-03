import { Button, Checkbox, Form, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import 'src/assets/less/login.less';

interface ILoginParam {
    username: string;
    password: string;
    remember: boolean;
}

interface ILoginFormProps extends FormComponentProps, RouteComponentProps {
}

class LoginForm extends React.Component<ILoginFormProps, ILoginParam> {
    readonly state: Readonly<ILoginParam> = {
        username: '',
        password: '',
        remember: true,
    }

    constructor(props: ILoginFormProps) {
        super(props);
    }

    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                try {
                    this.props.history.push('/home');
                } catch (error) {
                    message.error(JSON.stringify(error));
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-box">
                <div className="login">
                    <div className="login-form-box">
                        <div className="login-logo">
                            <div className="login-name">登录</div>
                        </div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator(`username`, {
                                    initialValue: this.state.username,
                                    rules: [{ required: true, message: '用户名不能为空' }]
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='username' />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator(`password`, {
                                    initialValue: this.state.password,
                                    rules: [{ required: true, message: '密码不能为空' }]
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder='password' />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator(`remember`, {
                                    valuePropName: 'checked',
                                    initialValue: this.state.remember,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )}
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const LoginPage = Form.create()(LoginForm);
export default LoginPage;