const Example = () => {
  const nums = [1, 2, 3];
  const sum = (arr) => arr.reduce((acc, cur) => (acc += cur));

  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      return sum;
    },
  };
  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      <p>オブジェクト指向型:{numObj.sum()}</p>
      <p>関数型:{sum(nums)}</p>
    </>
  );
};

export default Example;
