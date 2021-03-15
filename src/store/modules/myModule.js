const moduleA = {
   namspaced: true,
   state: {
      data: 'im from module',
   },
   mutations: {
      moduleMutation(state) {
         console.log(state);
      },
   },
};
export default moduleA;
