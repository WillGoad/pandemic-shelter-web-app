export default function Updates() {
    return (
      <>
      <img src="Bell.svg" className="absolute max-w-28 ml-36 mb-16" />
      <main className="flex flex-col justify-between items-center flex basis-11/12 mx-5 my-10">

        <header className="flex self-start">
          <h1 className="font-bold">Updates</h1>
        </header>
        <section>
          <div>Posts today</div>
          <div className="flex">
            <div>Replies</div>
            <div>New Followers</div>
          </div>
        </section>
        <section>
          <div>Title</div>
          <div>Posts</div>
          <div>See more</div>
        </section>
      </main>
    </>
    );
  }