import React from 'react'
import {
  View,
  Text,
  TextInput,
  Picker,
  Button,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import commonStyle from '../commonStyles'
import payWithQiwi from '../../redux-store/actions/payWithQiwi'
import newTransaction from '../../redux-store/actions/newTransaction'

const style = StyleSheet.create({
  picker: {
    width: '60%',
  },
})

class Payment extends React.Component {

  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Отмена',
        id: 'cancel',
      },
    ],
  }
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      operation: 'pay',
      money: 'qiwi',
      amount: '',
      comment: '',
      error: '',
    }
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'cancel') {
        Navigation.dismissModal()
      }
    }
  }

  onSubmit() {
    const payment = {
      kind: this.state.operation,
      ammount: this.state.amount,
      comment: this.state.comment,
      receiver_id: this.props.chat.companions[0].id
    }
    if (this.state.money === 'qiwi') {
      this.props.payWithQiwi(this.props.chat.companions[0].phone, this.state.amount)
            .then(() => {
              this.props.newTransaction(this.props.chat, payment)
                .then(() => Navigation.dismissModal(),
                  response => this.setState({ error: response.error.message })
                )
            },
            response => this.setState({ error: 'qiwi' + response.error.message }))
    } else {
      this.props.newTransaction(this.props.chat, payment)
        .then(() => Navigation.dismissModal(), 
          response => this.setState({ error: response.error.message }))
    }
  }

  render() {
    return (
      <View style={commonStyle.container}>
        <TextInput 
          placeholder='Сумма' 
          style={commonStyle.input} 
          value={this.state.amount} 
          onChangeText={text => this.setState({ amount: text })}
        />
        <TextInput 
          placeholder='Комментарий' 
          style={commonStyle.input} 
          value={this.state.comment}
          onChangeText={text => this.setState({ comment: text })}
        />
        <Picker 
          selectedValue={this.state.money}
          style={style.picker}
          onValueChange={(newValue, _) => this.setState({ money: newValue })}
        >
          <Picker.Item label='Наличные' value='cash' />
          <Picker.Item label='QIWI' value='qiwi' />
        </Picker>
        <Picker 
          selectedValue={this.state.operation}
          style={style.picker}
          onValueChange={(newValue, _) => this.setState({ operation: newValue })}
        >
          <Picker.Item label='Попросить' value='charge' />
          <Picker.Item label='Отправить' value='pay' />
        </Picker>
        <Text style={commonStyle.errorMsg}>{this.state.error}</Text>
        <Button title='Оформить' onPress={this.onSubmit} />
      </View>
    )
  }
}

Payment.propTypes = {
  chat: PropTypes.object.isRequired,
  newTransaction: PropTypes.func.isRequired,
  payWithQiwi: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  newTransaction,
  payWithQiwi,
}

export default connect(null, mapDispatchToProps)(Payment)
