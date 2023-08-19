import { Button, Form, Input, Card, Divider } from 'antd';
import { useParams } from 'react-router-dom';
import useComments from '../../hooks/useComments.jsx';

const layout = {
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
};

const AddForm = () => {
  const { videoId } = useParams();
  const { comments, sendComment } = useComments(videoId);

  const onFinish = async (values) => {
    const newComment = {
      username: values.user.name,
      comment: values.user.comments,
      videoId: videoId,
    };

    sendComment(newComment);
  };

  return (
    <>
      <h2>Comments</h2>
      <Card>

        {comments.length === 0 ? (
          <><p>No comments yet. Be the first to make a comment!</p><Divider /></>
        ) : (
          comments.map(comment => (
            <div key={comment._id}>
              <p>
                From: <strong>{comment.username}</strong>
                <br />
                {comment.comment}
              </p>
              <Divider />
            </div>
          ))
        )}
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >

          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'comments']} label="Pesan">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default AddForm;
