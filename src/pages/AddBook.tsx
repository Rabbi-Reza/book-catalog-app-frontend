import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePostBookMutation } from '@/redux/features/book/bookApi';
import { useAppSelector } from '@/redux/hook';
import { useState } from 'react';

const AddBook = () => {
  const { user } = useAppSelector((state) => state.user);

  const [postBook, { isLoading, isError, isSuccess }] = usePostBookMutation();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  const addProduct = () => {
    console.log('title', title);
    console.log('author', author);
    console.log('genre', genre);
    console.log('publicationDate', publicationDate);
    console.log('user', user.email);

    const data = {
      title: title,
      author: author,
      genre: genre,
      publicationDate: publicationDate,
      // reviews: [],
      uploader: user.email,
    };

    console.log('data', data);

    postBook({ data: data });
  };

  return (
    <div>
      <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
        <div className="flex gap-5">
          <div className="w-full space-y-5">
            <div>
              <Label htmlFor="name">Title</Label>
              <Input
                type="text"
                id="name"
                className="mt-2"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="name">Author</Label>
              <Input
                type="text"
                id="name"
                className="mt-2"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full space-y-5">
            <div>
              <Label htmlFor="name">Genre</Label>
              <Input
                type="text"
                id="name"
                className="mt-2"
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div>
              <Label className="mb-3" htmlFor="name">
                Publication Date
              </Label>
              {/* <DatePickerWithPresets /> */}
              <Input
                type="text"
                id="name"
                className="mt-2"
                onChange={(e) => setPublicationDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Button onClick={addProduct}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
