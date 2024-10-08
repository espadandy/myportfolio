import { useState, useEffect } from "react";
import {
    Authenticator,
    Button,
    Text,
    TextField,
    Heading,
    Flex,
    TextAreaField,
    View,
    Image,
    Grid,
    Divider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { getUrl, uploadData } from "aws-amplify/storage";

import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient({
    authMode: "userPool",
});

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */



export default function NotesView() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const { data: notes } = await client.models.Note.list();
        await Promise.all(
            notes.map(async (note) => {
                if (note.image) {
                    const linkToStorageFile = await getUrl({
                        path: ({ identityId }) => `media/${identityId}/${note.image}`,
                    });
                    console.log(linkToStorageFile.url);
                    note.image = linkToStorageFile.url;
                }
                return note;
            })
        );
        console.log(notes);
        setNotes(notes);
    }

    async function createNote(event) {
        console.log('create note!!!!!');
        event.preventDefault();
        const form = new FormData(event.target);
        console.log(form.get("image").name);

        const { data: newNote } = await client.models.Note.create({
            name: form.get("name"),
            description: form.get("description"),
            image: form.get("image").name,
        });

        console.log(newNote);
        if (newNote.image)
            if (newNote.image)
                await uploadData({
                    path: ({ identityId }) => `media/${identityId}/${newNote.image}`,

                    data: form.get("image"),
                }).result;
        fetchNotes();
        event.target.reset();
    }

    async function deleteNote({ id }) {
        const toBeDeletedNote = {
            id: id,
        };

        const { data: deletedNote } = await client.models.Note.delete(
            toBeDeletedNote
        );
        console.log(deletedNote);

        fetchNotes();
    }

    const AiDescription = () => {
        // 使用 useState 来控制 TextField 的值
        const [description, setDescription] = useState("");

        // 模拟自动填充数据
        const handleSetNewDescription = async () => {
            const result = await client.queries.improveEnglish({
                description: description,
            })
            setDescription(
                result.data
            );
        };

        return (
            <div>
                <TextAreaField
                    label="New note"
                    name="description"
                    placeholder="Text your content here..."
                    rows={10}
                    size="large"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button
                    variation="primary"
                    onClick={() => handleSetNewDescription()}
                >
                    Enhance your content with GPT
                </Button>
            </div>
        );
    };

    return (
        <Authenticator>
            {({ signOut }) => (
                <Flex
                    className="App"
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    width="70%"
                    margin="0 auto"
                >
                    <Heading level={1}>My Notes App</Heading>
                    <View as="form" margin="3rem 0" onSubmit={createNote}>
                        <Flex
                            direction="column"
                            justifyContent="center"
                            gap="2rem"
                            padding="2rem"
                        >
                            <TextField
                                name="name"
                                placeholder="Note Name"
                                label="Note Name"
                                labelHidden
                                variation="quiet"
                                required
                            />
                            <AiDescription />
                            <View
                                name="image"
                                as="input"
                                type="file"
                                alignSelf={"end"}
                                accept="image/png, image/jpeg"
                            />

                            <Button type="submit" variation="primary">
                                Save Note
                            </Button>
                        </Flex>
                    </View>
                    <Divider />
                    <Heading level={2}>Current Notes</Heading>
                    <Grid
                        margin="3rem 0"
                        autoFlow="column"
                        justifyContent="center"
                        gap="2rem"
                        alignContent="center"
                    >
                        {notes.map((note) => (
                            <Flex
                                key={note.id || note.name}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                gap="2rem"
                                border="1px solid #ccc"
                                padding="2rem"
                                borderRadius="5%"
                                className="box"
                            >
                                <View>
                                    <Heading level="3">{note.name}</Heading>
                                </View>
                                <Text fontStyle="italic">{note.description}</Text>
                                {note.image && (
                                    <Image
                                        src={note.image}
                                        alt={`visual aid for ${notes.name}`}
                                        style={{ width: 400 }}
                                    />
                                )}
                                <Button
                                    variation="destructive"
                                    onClick={() => deleteNote(note)}
                                >
                                    Delete note
                                </Button>
                            </Flex>
                        ))}
                    </Grid>
                    <Button onClick={signOut}>Sign Out</Button>
                </Flex>
            )}
        </Authenticator>
    );
}
