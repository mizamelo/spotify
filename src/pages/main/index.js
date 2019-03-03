/* eslint-disable quotes */
/* eslint-disable quote-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  View, StatusBar, FlatList, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Creators as AlbumsCreators } from '../../store/ducks/albums';

import AlbumItem from './components/AlbumItem';
import styles from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getAlbumRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {this.props.albums.loading ? (
          <ActivityIndicator size="small" color="#999" style={styles.loading} />
        ) : (
          <FlatList
            data={this.props.albums.data}
            keyExtractor={album => String(album.id)}
            renderItem={({ item }) => (
              <AlbumItem
                onPress={() => this.props.navigation.navigate('Album', { album: item })}
                album={item}
              />
            )}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
