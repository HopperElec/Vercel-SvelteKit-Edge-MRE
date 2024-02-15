export const config = {
    runtime: "edge",
};

export const GET = () => {
    let interval;
    return new Response(
        new ReadableStream({
            start(controller) {
                interval = setInterval(() => {
                    controller.enqueue(`event: rand\ndata: ${Math.random()}\n\n`);
                }, 1000);
            },
            cancel() {
                clearInterval(interval);
            }
        }),
        {
            headers: {
                "Content-Type": "text/event-stream",
            },
        },
    );
};
