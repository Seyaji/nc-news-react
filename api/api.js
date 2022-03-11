import axios from 'axios';

const api = axios.create({
   baseURL: 'https://seyaji-nc-news.herokuapp.com/api'
})

export const getArticles = async (params) => {

   const path = params?.id 
   ? `/articles/${params.id}` 
   : '/articles'

   return api({
      method: 'get',
      url: path,
      params: {
         sort_by: params?.sort_by,
         order: params?.order,
         title: params?.title
      }
   })
   .then((response) => {

      const responseKey = params?.id 
      ? response.data 
      : response.data.articles
      console.log(response.data)
      return responseKey
   })
   .catch((error) => console.log(error))
}

export const getTopics = async () => {
   return api({
      method: 'get',
      url: '/topics'
   })
   .then((response) => response.data)
   .catch((error) => console.log(error))
}

export const getUser = async (username) => {
   return api({
      method: 'get',
      url: `/users/${username}`
   })
   .then((response) => response.data)
   .catch((error) => console.log(error))
}

export const patchVotes = async (params) => {
   console.log(params)
   return api.patch(`/articles/${params.id}`, { inc_votes: params.inc_votes })
   .then((response) => response.data)
   .catch((error) => console.log(error))
}

export const getComments = (id) => {
   return api({
      method: 'get',
      url: `/articles/${id}/comments`,
   })
   .then((response) => response.data)
   .catch((error) => console.log(error))
}

export const patchComments = async (params) => {
   console.log(params)
   return api.patch(`/comments/${params.id}`, { inc_votes: params.inc_votes })
   .then((response) => response.data)
   .catch((error) => console.log(error))
}