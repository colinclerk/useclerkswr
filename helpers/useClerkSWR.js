import useSWR from "swr";
import { useSession } from "@clerk/nextjs";

export default function useClerkSWR(url) {
  const { getToken } = useSession();
  const fetcher = async (fetcherUrl) => {
    return fetch(fetcherUrl, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    }).then((r) => r.json());
  };
  return useSWR(url, fetcher);
}
