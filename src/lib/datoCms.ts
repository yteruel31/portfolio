interface PerformRequestProps {
  query: string;
  variables?: Record<string, unknown>;
  includeDrafts?: boolean;
}

interface RequestResult<T> {
  data: {
    [key: string]: T;
  };
}

export const request = async <T extends object>({
  query,
  variables = {},
}: PerformRequestProps): Promise<RequestResult<T>> => {
  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
      ...(process.env.NODE_ENV === 'development'
        ? { 'X-Include-Drafts': 'true' }
        : {}),
    },
    method: 'POST',
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody,
      )}`,
    );
  }

  return responseBody;
};
