type ApiResponse<Data> = {
  data: Data; // Data can be any type since it is a generic type
  status: 'success' | 'error';
}

type UserResponse = ApiResponse<{ name: string; age: number; }>
type BlogResponse = ApiResponse<{ title: string; content: string; }>

const res1: UserResponse = {
  data: {
    name: 'Taro',
    age: 28
  },
  status: 'success'
}

const res2: BlogResponse = {
  data: {
    title: 'Blog Title',
    content: 'Blog Content'
  },
  status: 'success'
}